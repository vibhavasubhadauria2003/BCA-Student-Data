document.getElementById("Register").addEventListener("click", async () => {
  const about = document.getElementById("about").value;
  const fullname = document.getElementById("fullname").value;
  const profession = document.getElementById("profession").value;
  const dob = document.getElementById("dob").value;
  const father_name = document.getElementById("father_name").value;
  const mother_name = document.getElementById("mother_name").value;
  const user_location = document.getElementById("user_location").value;

  const response = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      about,
      fullname,
      profession,
      dob,
      father_name,
      mother_name,
      user_location,
    }),
  });

  const data = await response.json();
  console.log(data);
});
