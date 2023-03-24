function togglePasswordVisibility() {
    const passwordField = document.getElementById("password-field");
    const visibilityOnIcon = document.getElementById("visibility-on-icon");
    const visibilityOffIcon = document.getElementById("visibility-off-icon");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      visibilityOnIcon.style.display = "none";
      visibilityOffIcon.style.display = "block";
    } else {
      passwordField.type = "password";
      visibilityOnIcon.style.display = "block";
      visibilityOffIcon.style.display = "none";
    }
  }

  const studentImages = document.querySelector(".Student-Images");
  const facultyImages = document.querySelector(".Faculty-Images");
  const hodImages = document.querySelector(".HOD-Images");
  const dpoImages = document.querySelector(".DPO-Images");
  const adminImages = document.querySelector(".Admin-Images");
  const iqcImages = document.querySelector(".IQC-Images");
  const circle1 = document.querySelector(".circle-student");
  const circle2 = document.querySelector(".circle-faculty");
  const circle3 = document.querySelector(".circle-hod");
  const circle4 = document.querySelector(".circle-dpo");
  const circle5 = document.querySelector(".circle-admin");
  const circle6 = document.querySelector(".circle-iqc");
  
  const studentRadio = document.getElementById("Student");
  const facultyRadio = document.getElementById("Faculty");
  const hodRadio = document.getElementById("HOD");
  const dpoRadio = document.getElementById("DPO");
  const adminRadio = document.getElementById("Admin");
  const iqcRadio = document.getElementById("IQC");
  
  studentRadio.checked = true; // set the default checked radio button
  
  function showImages() {
    if (studentRadio.checked) {
      studentImages.classList.add("student-show");
      studentImages.classList.remove("student-hide");
      circle1.classList.add("student-show")
      circle1.classList.remove("student-hide")
      
  
      facultyImages.classList.add("faculty-hide");
      facultyImages.classList.remove("faculty-show");
      circle2.classList.add("faculty-hide");
      circle2.classList.remove("faculty-show");
  
      hodImages.classList.add("hod-hide");
      hodImages.classList.remove("hod-show");
      circle3.classList.add("hod-hide");
      circle3.classList.remove("hod-show");
  
      dpoImages.classList.add("dpo-hide");
      dpoImages.classList.remove("dpo-show");
      circle4.classList.add("dpo-hide");
      circle4.classList.remove("dpo-show");
  
      adminImages.classList.add("admin-hide");
      adminImages.classList.remove("admin-show");
      circle5.classList.add("admin-hide");
      circle5.classList.remove("admin-show");
  
      iqcImages.classList.add("iqc-hide");
      iqcImages.classList.remove("iqc-show");
      circle6.classList.add("iqc-hide");
      circle6.classList.remove("iqc-show");
    } else if (facultyRadio.checked) {
      studentImages.classList.add("student-hide");
      studentImages.classList.remove("student-show");
      circle1.classList.add("student-hide");
      circle1.classList.remove("student-show");
  
      facultyImages.classList.add("faculty-show");
      facultyImages.classList.remove("faculty-hide");
      circle2.classList.add("faculty-show");
      circle2.classList.remove("faculty-hide");

      hodImages.classList.add("hod-hide");
      hodImages.classList.remove("hod-show");
      circle3.classList.add("hod-hide");
      circle3.classList.remove("hod-show");
  
      dpoImages.classList.add("dpo-hide");
      dpoImages.classList.remove("dpo-show");
      circle4.classList.add("dpo-hide");
      circle4.classList.remove("dpo-show");
  
      adminImages.classList.add("admin-hide");
      adminImages.classList.remove("admin-show");
      circle5.classList.add("admin-hide");
      circle5.classList.remove("admin-show");
  
      iqcImages.classList.add("iqc-hide");
      iqcImages.classList.remove("iqc-show");
      circle6.classList.add("iqc-hide");
      circle6.classList.remove("iqc-show");
    } else if (hodRadio.checked) {
      studentImages.classList.add("student-hide");
      studentImages.classList.remove("student-show");
      circle1.classList.add("student-hide");
      circle1.classList.remove("student-show");
  
      facultyImages.classList.add("faculty-hide");
      facultyImages.classList.remove("faculty-show");
      circle2.classList.add("faculty-hide");
      circle2.classList.remove("faculty-show");
  
      hodImages.classList.add("hod-show");
      hodImages.classList.remove("hod-hide");
      circle3.classList.add("hod-show");
      circle3.classList.remove("hod-hide");

      dpoImages.classList.add("dpo-hide");
      dpoImages.classList.remove("dpo-show");
      circle4.classList.add("dpo-hide");
      circle4.classList.remove("dpo-show");
  
      adminImages.classList.add("admin-hide");
      adminImages.classList.remove("admin-show");
      circle5.classList.add("admin-hide");
      circle5.classList.remove("admin-show");
  
      iqcImages.classList.add("iqc-hide");
      iqcImages.classList.remove("iqc-show");
      circle6.classList.add("iqc-hide");
      circle6.classList.remove("iqc-show");
    }
    else if (dpoRadio.checked) {
      studentImages.classList.add("student-hide");
      studentImages.classList.remove("student-show");
      circle1.classList.add("student-hide");
      circle1.classList.remove("student-show");
      
  
      facultyImages.classList.add("faculty-hide");
      facultyImages.classList.remove("faculty-show");
      circle2.classList.add("faculty-hide");
      circle2.classList.remove("faculty-show");
  
      hodImages.classList.add("hod-hide");
      hodImages.classList.remove("hod-show");
      circle3.classList.add("hod-hide");
      circle3.classList.remove("hod-show");
  
      dpoImages.classList.add("dpo-show");
      dpoImages.classList.remove("dpo-hide");
      circle4.classList.add("dpo-show");
      circle4.classList.remove("dpo-hide");
  
      adminImages.classList.add("admin-hide");
      adminImages.classList.remove("admin-show");
      circle5.classList.add("admin-hide");
      circle5.classList.remove("admin-show");
  
      iqcImages.classList.add("iqc-hide");
      iqcImages.classList.remove("iqc-show");
      circle6.classList.add("iqc-hide");
      circle6.classList.remove("iqc-show");
  } else if (adminRadio.checked) {
    studentImages.classList.add("student-hide");
    studentImages.classList.remove("student-show");
    circle1.classList.add("student-hide");
    circle1.classList.remove("student-show");    

    facultyImages.classList.add("faculty-hide");
    facultyImages.classList.remove("faculty-show");
    circle2.classList.add("faculty-hide");
    circle2.classList.remove("faculty-show");

    hodImages.classList.add("hod-hide");
    hodImages.classList.remove("hod-show");
    circle3.classList.add("hod-hide");
    circle3.classList.remove("hod-show");

    dpoImages.classList.add("dpo-hide");
    dpoImages.classList.remove("dpo-show");
    circle4.classList.add("dpo-hide");
    circle4.classList.remove("dpo-show");

    adminImages.classList.add("admin-show");
    adminImages.classList.remove("admin-hide");
    circle5.classList.add("admin-show");
    circle5.classList.remove("admin-hide");

    iqcImages.classList.add("iqc-hide");
    iqcImages.classList.remove("iqc-show");
    circle6.classList.add("iqc-hide");
    circle6.classList.remove("iqc-show");
  } else if (iqcRadio.checked) {
    studentImages.classList.add("student-hide");
    studentImages.classList.remove("student-show");
    circle1.classList.add("student-hide");
    circle1.classList.remove("student-show");    

    facultyImages.classList.add("faculty-hide");
    facultyImages.classList.remove("faculty-show");
    circle2.classList.add("faculty-hide");
    circle2.classList.remove("faculty-show");

    hodImages.classList.add("hod-hide");
    hodImages.classList.remove("hod-show");
    circle3.classList.add("hod-hide");
    circle3.classList.remove("hod-show");

    dpoImages.classList.add("dpo-hide");
    dpoImages.classList.remove("dpo-show");
    circle4.classList.add("dpo-hide");
    circle4.classList.remove("dpo-show");

    adminImages.classList.add("admin-hide");
    adminImages.classList.remove("admin-show");
    circle5.classList.add("admin-hide");
    circle5.classList.remove("admin-show");

    iqcImages.classList.add("iqc-show");
    iqcImages.classList.remove("iqc-hide");
    circle6.classList.add("iqc-show");
    circle6.classList.remove("iqc-hide");
  }
}
studentRadio.addEventListener("click", showImages);
facultyRadio.addEventListener("click", showImages);
hodRadio.addEventListener("click", showImages);
dpoRadio.addEventListener("click", showImages);
adminRadio.addEventListener("click", showImages);
iqcRadio.addEventListener("click", showImages);

  


