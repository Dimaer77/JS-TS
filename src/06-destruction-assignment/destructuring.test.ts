import {ManType} from "./Destructuring";


let props: ManType;
beforeEach(() => {
    props = {
        name: "di",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "nez street"
            }
        }
    }
})

test("", () => {


    const {age: a, lessons: l,} = props
    const {title} = props.address.street
    expect(a).toBe(32)
    expect(title).toBe("nez street")
})

test("sss", () => {
})


test("asas", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [ls1, ls2] = props.lessons
    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
})