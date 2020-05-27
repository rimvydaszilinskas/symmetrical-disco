function handleDateChange(event) {
  let value = event.target.value;

  fetch("/date/leap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.isLeap) {
        document.getElementById("questions").style.display = "none";
      } else {
        document.getElementById("questions").style.display = "inline";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let data = {
    value: 0,
  };

  let questionsRequired =
    document.getElementById("questions").style.display !== "none";
  let name = document.getElementById("name").value;

  let date = document.getElementById("date").value;

  if (name === "") {
    alert("Please enter name");
    return;
  }

  if (date === "") {
    alert("Please enter date");
    return;
  }

  data.date = date;

  if (questionsRequired) {
    let questions = ["q1", "q2", "q3"];

    try {
      questions.forEach((qName, index) => {
        let q = document.getElementsByName(qName);
        let checked = false;

        q.forEach((elem) => {
          if (elem.checked) {
            checked = true;
            data.value += parseInt(elem.value);
          }
        });

        if (!checked) {
          alert(`Please select ${index + 1} question`);
          throw "";
        }
      });
    } catch (e) {
      console.log(e);
      return;
    }
  }

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status != 200) {
        throw "status not 200";
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      alert(
        `${name}, you are a ${response.sign} and your prediction is: ${response.data}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
});
