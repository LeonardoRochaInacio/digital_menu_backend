import { add } from "../src/testingfile";

describe("test add function", () => {

    it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
    });

    it("should return 5 for add(2,3)", () => {
        expect(add(2, 3)).toBe(5);
    });

    it("should return -100 for add(-99,-1)", () => {
        expect(add(-99, -1)).toBe(-100);
    });

    it("should return -50 for add(-100,50)", () => {
        expect(add(-100, 50)).toBe(-50);
    });

    it("should return 50 for add(500,-450)", () => {
        expect(add(500,-450)).toBe(50);
    });

    it("should return -1 for add(2000,-450)", () => {
        expect(add(2000,-450)).toBe(-1);
    });

});