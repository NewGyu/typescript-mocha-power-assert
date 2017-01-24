import * as assert from "power-assert";
import * as mocha from "mocha";

import * as target from "../src/index";

describe("test of hogehoge",()=>{
  it("case fugafuga", ()=>{
    assert(target.someProcess("xxxx") === "ge:xxxx:fuga");
  })
});