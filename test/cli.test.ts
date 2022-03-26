import { execSync } from "child_process";

const testCommand = (args: string) => {
  return execSync(`node src/cli.ts ${args}`).toString();
};

describe("CLI", () => {
  it("should use the positional argument", () => {
    const path = './templates/test.template.json'
    expect(testCommand(`parse-template -t ${path}`)).toBe("oof");
  });
});