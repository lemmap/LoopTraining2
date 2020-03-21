function CountTo100() {
    let result = document.getElementById("result1");
    let count = 1;
    for (let i = 1; i <= 100; i++, count++) {
        result.innerHTML += i + " ";
        if (count === 99) {
            alert("xong");
            break;
        }
        // else {
        //     result.innerHTML += i + " ";
        //     console.log(count);
        // }
    }
}

function showAlert() {
    let temperature = parseInt(prompt("nhap vao nhiet do"));
    if (temperature < 20) {
        document.getElementById("result2").innerHTML = "yeu cau tang nhiet do";
    }
    else if (temperature > 100) {
        document.getElementById("result2").innerHTML = "yeu cau giam nhiet do";
    } else document.getElementById("result2").innerHTML = " nhiet do bth";

}

function showNumber() {
    let a = 1;
    let b = 1;
    let big_sum = 1;
    let count = 1;
    while (count < 20) {
        let sum = a + b;
        console.log(count, a, b, sum, big_sum);
        count++;
        a = b;
        b = sum;
        big_sum += a;
        document.getElementById("result3").innerHTML += a + " "
    }
    document.getElementById("result3").innerHTML += "=" + big_sum
}

function findNumber() {
    let a = 1,
        b = 1;
    while (!(a % 5 === 0)) {
        let temp = a + b;
        a = b;
        b = temp;
        document.getElementById("result4").innerHTML = "so dau tien chia het cho 5 trong day so la " + a
    }
}

function sumOf7() {
    let count = 0;
    let num = 0;
    let sum = 0;
    while (count <= 30) {
        if (num % 7 === 0) {
            sum += num;
            console.log(+num);
            count++;
            num++;
        } else {
            num++;
        }
    }
    document.getElementById("result5").innerHTML = "tong 30 so dau tien chia het cho 7 là: " + sum

}
function print3And5() {
    for (let i=1;i<100;i++) {
        if (i%3===0) {
            document.getElementById("result6").innerHTML+=" Fizz "
        }else if (i%5===0) {
            document.getElementById("result6").innerText+=" Buzz "
        }else if (i%5===0||i%3===0){
            document.getElementById("result6").innerHTML+=" FizzBuzz "
        }else
            document.getElementById("result6").innerHTML+=i +" "
    }
}
function guessNumber() {
    let count = 0;
    let range_number = parseInt(prompt("nhap vao khoang so"));
    console.log(range_number);
    let result_number = Math.floor(Math.random() * range_number);
    console.log(result_number);
    while (count < 3) {
        let guess_number = parseInt(prompt("nhap vao so doan"));
        if (result_number < guess_number) {
            alert("so ban doan cao hon ket qua");
            count++;
            console.log("a " + count);
        } else if (result_number > guess_number) {
            alert("so ban doan thap hon ket qua");
            count++;
            console.log("b " + count);
        }
        else {
            alert("chuc mung ban da doan dung");
        }
    }
    if (count === 3) {
        console.log("d " + count);
        alert("ban da het luot doan");
    }
}

