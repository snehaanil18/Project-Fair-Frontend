import React from 'react'
import Swal from 'sweetalert2'

function Profile() {
  const updateUser = () =>{
    Swal.fire({
      title: 'Success',
      text: 'User Details Updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='mt-5'>My Profile</h3>
        <label>
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://static.vecteezy.com/system/resources/thumbnails/021/352/965/small_2x/user-icon-person-profile-avatar-with-plus-symbol-add-user-profile-icon-png.png" alt="" />
        </label>
        <div className="mx-5">
          <input type="text" placeholder='Name' className='form-control mb-2' />
          <input type="text" placeholder='Github' className='form-control mb-2' />
          <input type="text" placeholder='Live Link' className='form-control mb-2' />
          <button style={{backgroundColor:'#2AA198'}} onClick={updateUser} className='btn text-light m-3'>Update</button>
        </div>

      </div>
    </div>
  )
}

export default Profile