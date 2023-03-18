import * as Commands from './commands/common';
import * as ProfileCommands from './commands/profile';

Cypress.Commands.addAll(Commands);
Cypress.Commands.addAll(ProfileCommands);
