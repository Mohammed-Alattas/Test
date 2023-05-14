<?php 
include './inc/db.php';
include './inc/form.php';
include './inc/select.php';
include './inc/db_close.php';
?>

<?php  include_once './parts/header.php'; ?>
    
     

        <div class="position-relative overflow-hidden p-3 p-md-2 m-md-3 text-center">
        <div class="col-md-5 p-lg-5 mx-auto">
          <img src="images/img3.jpg" height="300" width="450" alt="" class="rounded">
          <div class="space"></div>
          <h1 class="fw-bold">اربح معنا دورة فوتوشوب مجانية</h1>
        <div class="space"></div>
        <img src="images/img4.jpeg" alt="" class="rounded-circle"><br>
        <p class="lead fw-normal">باقي على نهاية التسجيل</p>
        <h3 id="countdown"></h3>
      </div>
      <div class="container">
        <h3> شروط المسابقات </h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">أن لا يكون الشراء شرطاً للدخول في المسابقة.</li>
          <li class="list-group-item">أن لا يتم تكرار فوز متسابق واحد بأكثر من جائزة.</li>
          <li class="list-group-item">معرفة تاريخ إعلان نتائج المسابقة والموعد المحدد لتوزيع الجوائز.</li>
          <li class="list-group-item">معرفة طبيعة الجوائز المقدمة للمسابقة.</li>
          <li class="list-group-item">استلام الجائزة خلال مدة لا تزيد على (7) أيام من تاريخ فرز النتائج.</li>
          </ul>  
          </div>
        </div>      

                
         
        <div class="container">
         <div class="position-relative text-center">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <form  action="<?php $_SERVER['PHP_SELF'] ?>" method = "POST">
        <h3>الرجاء ادخال المعلومات</h3>

  <div class="mb-3">
    <label for="firstName" class="form-label">الاسم الأول</label>
    <input type="text" name="firstName" id="firstName" class="form-control" value="<?php echo $firstName ?>">
    <div class="form-text error"><?php echo $errors['firstNameError'] ?> </div>
  </div>

  <div class="mb-3">
    <label for="lastName" class="form-label">الاسم الأخير</label>
    <input type="text" name="lastName" id="lastName" class="form-control" value="<?php echo $lastName ?>">
    <div class="form-text error"><?php echo $errors['lastNameError'] ?></div>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">البريد الالكتروني</label>
    <input type="text" name="email" id="email" class="form-control" value="<?php echo $email ?>">
    <div class="form-text error"><?php echo $errors['emailError'] ?></div>
  </div>


   <!-- <<<<< <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
    </div>                   FOR PASSWORD     NOOO >>>>>>>> -->
  
  <button type="submit" name="submit" class="btn btn-primary">ارسال المعلومات</button>
</form>
</div>
</div> 
 

    <!-- <form action="index.php" method = "POST">
        <input type="text" name="firstName" id="firstName" placeholder="First Name">
        <input type="text" name="lastName" id="lastName" placeholder="Last Name">
        <input type="text" name="email" id="email" placeholder="Email">
        <input type="submit" name="submit" value="send">
    </form>     NOOO  -->
  <div class="loader-con">
    <div id="loader">
      <canvas id="circularLoader" width="200" height="200"></canvas>
    </div>
  </div>

    <!-- Button trigger modal -->
    <div class = "d-grid gap-2 col-6 mx-auto my-5">
      <button type="button" id="winner" class="btn btn-primary">
      اختيار الرابح
      </button>
    </div>

<!-- Modal -->
<div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">الرابح في المسابقة</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <?php foreach ($users as $user) : ?>
        <h1 class="display-3 text-center modal-title" id="modalLabel"><?php echo htmlspecialchars($user['firstName']) . ' ' . htmlspecialchars($user['lastName']) . '<br>';?> </h1>
        <?php endforeach; ?> 
      </div>
    </div>
  </div>
</div>


<!-- <div id="cards" class="row mb-5 pb-5">
    
        <div class = "col-sm-6">
            <div class = "card my-2 bg-light">
                <div class = "card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"><?php echo htmlspecialchars($user['email']) ; ?></p>
                </div>
            </div>
        </div>    
</div>       NOOOO -->

<?php  include_once './parts/footer.php'; ?>
   