document.querySelector('#btnSubmit').onclick = async ()=>{
    let tagInput = document.querySelectorAll('#frm .form-input');
    let gender= document.querySelector('input[name="gender"]:checked').value;
    let info ={};
    for (let tag of tagInput){
        info[tag.id] =tag.value;
    }
    if (gender == 'Male') info['gender']=true; else info['gender']=false;
    console.log(info);
    try{
        let res = await axios({
        url : `https://shop.cyberlearn.vn/api/Users/signup`,
        method : "POST",
        data : info
    })
    window.location.reload();
    alert('Đã thêm thành công');
    }catch(err){
        console.log("lỗi",err);
        alert('Đã thêm thất bại');
    }
}