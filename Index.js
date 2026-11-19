function myButtonWasClicked() {
    console.log("la la la " + new Date().toLocaleString());

    //#mainform [name=fn]
    console.log(document.querySelector("#thefirstname").value.length)
    console.log(document.querySelector("#thelastname").value.length)

    if (document.querySelector("#thefirstname").value.length > 2) {

        console.log("nununu")
    }
}

