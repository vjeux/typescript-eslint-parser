/**
 * @fileoverview Tests for ECMA feature flags
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path"),
    parser = require("../../parser"),
    shelljs = require("shelljs"),
    testUtils = require("../../tools/test-utils");

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = "./tests/fixtures/ecma-features";


const testFiles = shelljs.find(FIXTURES_DIR)
    .filter(filename => filename.indexOf(".src.js") > -1)
    // strip off ".src.js"
    .map(filename => filename.substring(FIXTURES_DIR.length - 1, filename.length - 7))
    .filter(filename => !(/error-|invalid-|globalReturn/.test(filename)));

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("ecmaFeatures", () => {

    let config;

    beforeEach(() => {
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaFeatures: {},
            errorOnUnknownASTType: true
        };
    });

    testFiles.forEach(filename => {

        // Uncomment and fill in filename to focus on a single file
        // var filename = "jsx/invalid-matching-placeholder-in-closing-tag";
        const feature = path.dirname(filename),
            code = shelljs.cat(`${path.resolve(FIXTURES_DIR, filename)}.src.js`);

        it(`should parse correctly when ${feature} is true`, () => {
            config.ecmaFeatures[feature] = true;
            let expected = null;

            const regexFilenames = [
                "regexYFlag/regexp-y-simple",
                "regexUFlag/regex-u-simple",
                "regexUFlag/regex-u-extended-escape"
            ];
            if (regexFilenames.indexOf(filename) !== -1) {
                const nodeVersions = process.versions;
                const nodeVersionParts = nodeVersions.node.split(".");
                const nodeMajorVersion = parseInt(nodeVersionParts[0], 10);

                if (nodeMajorVersion >= 6) {
                    expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.supported.result.js`);
                } else {
                    expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.unsupported.result.js`);
                }
            } else {
                expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.result.js`);
            }
            let result;

            try {
                result = parser.parse(code, config);
                result = testUtils.getRaw(result);
            } catch (ex) {

                // format of error isn't exactly the same, just check if it's expected
                if (expected.message) {
                    return;
                }
                throw ex;


            }
            expect(result).toEqual(expected);
        });

    });


});
