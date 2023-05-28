import { Command, Option } from "@commander-js/extra-typings";

const command = new Command("load");

const formatOption = new Option(
  "-f, --format [format]",
  "display loaded data in [format] format"
)
  .choices(["json", "table"])
  .default("json");

command.addOption(formatOption).action(({ format }) => {
  console.log("**************");
  console.log(format);
  console.log("**************");
});

export default command;
