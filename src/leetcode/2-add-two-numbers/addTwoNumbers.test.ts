import { addTwoNumbers, ListNode } from "./addTwoNumbers";

const l1: ListNode = {
  val: 0,
  next: {
    val: 0,
    next: {
      val: 1,
      next: null,
    },
  },
};

const l2: ListNode = {
  val: 0,
  next: {
    val: 0,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l3: ListNode = {
  val: 0,
  next: {
    val: 0,
    next: {
      val: 4,
      next: null,
    },
  },
};

const l4: ListNode = {
  val: 0,
  next: null,
};

describe("addTwoNumbers", () => {
  it("should correctly sum two numbers", () => {
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });

  it("should return a linked list", () => {
    expect(addTwoNumbers(l1, l2)).toBeInstanceOf(ListNode);
  });

  it("should return a ListNode with a value of 0 if both numbers are zero", () => {
    expect(addTwoNumbers(l4, l4)).toStrictEqual(l4);
  });
});
