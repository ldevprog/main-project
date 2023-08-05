import { expect, test, describe } from "@jest/globals";
import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("class")).toBe("class");
    });
    test("with additional classes", () => {
        const expected = "class class2 class3";
        expect(classNames("class", {}, ["class2", "class3"])).toBe(expected);
    });
    test("with mods true", () => {
        const expected = "class class2 class3 hovered scrollable";
        expect(
            classNames("class", { hovered: true, scrollable: true }, [
                "class2",
                "class3",
            ])
        ).toBe(expected);
    });
    test("with mods false", () => {
        const expected = "class class2 class3 scrollable";
        expect(
            classNames("class", { hovered: false, scrollable: true }, [
                "class2",
                "class3",
            ])
        ).toBe(expected);
    });
    test("with mods undefined", () => {
        const expected = "class class2 class3 scrollable";
        expect(
            classNames("class", { hovered: undefined, scrollable: true }, [
                "class2",
                "class3",
            ])
        ).toBe(expected);
    });
});
