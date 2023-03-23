import * as Commands from './commands/common';
import * as ProfileCommands from './commands/profile';
import * as ArticleCommands from './commands/article';
import * as CommentCommands from './commands/comment';
import * as RateCommands from './commands/rate';

Cypress.Commands.addAll(Commands);
Cypress.Commands.addAll(ProfileCommands);
Cypress.Commands.addAll(ArticleCommands);
Cypress.Commands.addAll(CommentCommands);
Cypress.Commands.addAll(RateCommands);
