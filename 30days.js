/**
 * day 7
 * 小明考试成绩不好，每次考试靠瞎猜。小明的老师对他说：
 * 小明 如果考不到60分你继续考，直到考到60分，我实现你的愿望让你和
 * 凯莉坐到一起。
 * @return {[type]} [description]
 */
function exam() {
    var score = Math.floor(Math.random() * 101)
    if(score >= 60) {
        console.log('及格，和凯丽坐到一起')
    } else {
        console.log('不及格，继续考试')
        setTimeout(exam, 1000)
    }
}
exam()

/**
 * 对上述代码用Promise改写，能用以下方式调用
 */
exam().then(score => {
    console.log('及格，和凯丽坐到一起')
})

function exam() {
    return new Promise((resolve, reject) => {
        var score = Math.floor(Math.random() * 101)
        if(score >= 60) {
            resolve(score)
        } else {
            console.log('不及格，继续考试')
            setTimeout(() => resolve(exam()), 1000)
        }
    })
}

/**
 * day 8
 * 写一个byField函数，实现数组按姓名、年纪、任意字段排序
 */
var users = [
    {name: 'John', age: 20, company: 'Baidu'},
    {name: 'Pete', age: 18, company: 'Alibaba'},
    {name: 'Ann', age: 19, company: 'Tencent'},
]

users.sort(byField('company'))
/**
 * alibaba baidu tencent
 */

users.sort(byField('name'))
/**
 * ann john pete
 */

function byField(key) {
    return function(a, b) {
        if(a[key] > b[key]) {
            return 1
        } else if(a[key] < b[key]) {
            return -1
        } else {
            return 0
        }
    }
}

/**
 * day 9
 * 尽量使用ES6
 * 用尽可能多的方法实现，代码越短越好
 */
const obj = { a: 1, b: 2, c: 3 }
function select(obj, arr) {
    const result = {}
    for (let key of arr) {
        result[key] = obj[key]
    }
    return result
}

function select2(obj, arr) {
    return arr.map(it => obj[it])
}

function select3(obj, arr) {
    let result = {}
    arr.reduce((accumulator, it) => {
        result[it] = obj[it]
        Object.assign(result, accumulator)
        return accumulator
    }, {})
    return result
}

select(obj, ['a', 'c']) // {a: 1, c: 3}



