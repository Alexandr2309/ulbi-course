import { Node, Project, SyntaxKind } from 'ts-morph';

const project = new Project({});

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
  throw Error('Укажите названия фича-флага');
}

if (!featureState) {
  throw Error('Укажите состояние  фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw Error('Некорректое значение состояния фичи');
}


project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');


const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
      );

      if (!objectOptions) return;

      const onFunctionProperty = objectOptions.getProperty('on');
      const offFunctionProperty = objectOptions.getProperty('off');

      const featureNameProperty = objectOptions.getProperty('name');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
      );
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

      if(featureName !== removeFeatureName) return;

      if(featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }
      if(featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }

    }
  });
});

project.save();
