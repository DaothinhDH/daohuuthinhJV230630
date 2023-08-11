let students = [
    {
        id: 1,
        name: "rikkei",
        email: "rikkei@gmail.com",
        phone: "0823868888",
        address: "Hà Nội",
        gender: "Nam"

    }
]
let index;
function showstuedent(list = students) {
    let string = ""
    for (let i = 0; i < list.length; i++) {
        let element = list[i]
        string += `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.phone}</td>
                        <td>${element.address}</td>
                        <td>${element.gender}</td>
                        <td>
                            <button  onclick="edit(${element.id})">edit</button>
                        </td>
                        <td>
                            <button  onclick="del(${i})">delete</button>
                        </td>
                    </tr>`

    }
    document.getElementById("tbody").innerHTML = string;
}
showstuedent();


function getNewId() {
    if (students.length == 0) {
        return newId = 1;
    }
    return newId = students.length + 1;
}

let ipname = document.getElementById("name");
let ipemail = document.getElementById("email");
let ipphone = document.getElementById("phone");
let ipaddress = document.getElementById("address");
let ipgender = document.getElementById("gender");
function saveStudent() {

    if (ipname === "" || ipemail === "" || ipphone === "" || ipaddress === "") {
        alert("Vui lòng nhập đầy đủ thông tin học viên");

    } else {
        if (index >= 0) {
            students[index].name = ipname.value;
            students[index].email = ipemail.value;
            students[index].phone = ipphone.value;
            students[index].address = ipaddress.value;
            index = -1;
        } else {
            let student = {
                id: getNewId(),
                name: ipname.value,
                email: ipemail.value,
                phone: ipphone.value,
                address: ipaddress.value,
                gender: ipgender.value
            }

            students.push(student);
            
        }

    }


    showstuedent();
    ipname.value = ""
    ipemail.value = ""
    ipphone.value = ""
    ipaddress.value=""
}


function findIndex(id) {
    for (let i = 0; i < students.length; i++) {
        if (id == students[i].id) {
            return i;
        }
    }
    return -1;
}



function del(index) {
    students.splice(index, 1);
    showstuedent();
}

function edit(id) {
    index = findIndex(id);
    ipname.value = students[index].name;
    ipemail.value = students[index].email;
    ipphone.value = students[index].phone;
    ipaddress.value = students[index].address;
    return index;
}

function sapxepStudent() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    showstuedent();
}

function searchStudent() {
    let textSearch = document.getElementById("search").value;
    let findStudent = students.filter(student => student.name.toLowerCase().includes(textSearch.trim().toLowerCase()))
    showstuedent(findStudent);
}