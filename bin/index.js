#!/usr/bin/env node

const commander = require("commander");
const fs = require("fs");
const path = require("path");

const { Command } = commander;
const program = new Command();
// 创建文件的路径
let fileName = "example.txt";

program
  .command("layout")
  .description("create a layout page")
  .option("-n,--name [name]", "文件名")
  .allowUnknownOption()
  .action((options) => {
    // 使用fs.writeFile创建文件，如果文件已存在则会被覆盖
    if (options.name) {
      fileName = options.name;
    }
    fs.writeFile(
      path.resolve(process.cwd(), fileName),
      process.cwd(),
      (err) => {
        if (err) throw err;
        console.log("文件已被创建或覆盖");
      }
    );
  });

program.parse(process.argv);
