function printFormValues() {
    const personObj = {}
    var form = new FormData(document.getElementsByTagName("form")[0]);
    form.entries().forEach((entry) => {
        let value = entry[1];
        if (entry[0] == 'isResident') {
            if (entry[1] == 'on') {
                value = true
            }
        }
        personObj[entry[0]] = value;
    })
    console.log(personObj)
}