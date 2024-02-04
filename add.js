function count(){
    let a = document.getElementById("valueA").value
    let b = document.getElementById("valueB").value
    
    document.getElementById("a").innerHTML = a
    document.getElementById("b").innerHTML = b
    document.getElementById("c").innerHTML = Number(a)+Number(b)
}