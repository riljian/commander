import { Command } from "@commander-js/extra-typings";
import loadCommand from "./load";

const program = new Command();

program.addCommand(loadCommand);

program.parse();
