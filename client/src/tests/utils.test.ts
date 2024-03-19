import { describe, it } from "vitest";
import { utils } from "@/lib/utils";

describe("utils", () => {
  describe("dates", () => {
    describe("test", () => {
      it("expects test string", ({ expect }) => {
        expect("test").toBe("test");
      });
    });
  });
  describe("calendar", () => {
    describe("isZeroDay", () => {
      it("returns empty string if the day is 0, otherwise it returns the day", ({
        expect,
      }) => {
        const zeroDayResult = utils.calendar.isZeroDay(0);
        const nonZeroDayResult = utils.calendar.isZeroDay(15);

        expect(zeroDayResult).toBe("");
        expect(nonZeroDayResult).toBe(15);
      });
    });
    describe("getMonthlyDays", () => {
      it("generates the correct structure of weeks with days", ({ expect }) => {
        const daysInMonth = 31;
        const startDayOfMonth = 3;

        const result = utils.calendar.getMonthlyDays(
          daysInMonth,
          startDayOfMonth,
        );

        expect(result).toHaveLength(5);
        expect(result[0].weekNumber).toBe(1);
        expect(result[0].days).toEqual([0, 0, 0, 1, 2, 3, 4]);
      });
    });
  });
  describe("tailwindCSS", () => {
    describe("bgImageFormat", () => {
      it("expects to pass a path to the function and make it a Tailwind bg image arbitrary value", ({
        expect,
      }) => {
        const path = "/assets/carousel/oscars-movies-slider.jpg";
        const bgImage = utils.tailwindCSS.bgImageFormat(path);
        const outPutSrc =
          "bg-[url('src/assets/carousel/oscars-movies-slider.jpg')]";
        expect(bgImage).toBe(outPutSrc);
      });
    });
  });
});
