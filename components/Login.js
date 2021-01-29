import Link from "next/link";
import Router from 'next/router'
const axios = require("axios")

class Login extends React.Component {
  state = {
    // Initially, no file is selected
    user :'',
    pass  :''
  };
   onLoginClick =  (e) => {

       axios.post('/api/student/getUser', {
       user: 'kemal',
       pass: '1'
     })
         .then(function (response) {

            // Router.push('/present')
            if (response.data.length === 0)
               alert('user')
            else
            {
                 //Router.push('/present?id='+ response.data[0].id)
                window.location.href = 'http://www.kemalbalta.com/present?id='+response.data[0].id
            }




         })
         .catch(function (error) {
           console.log(error);
         });

  };
  userChange = (event) => {
    this.setState({user: event.target.value})
  }
  passChange = (event) => {
    this.setState({pass: event.target.value})
  }


  render() {
    return (
      <div className="col-lg-6 nopadding">
        <div className=" d-flex flex-column align-items-center justify-content-center">

          <div className="search_content text-center">
            <h1 className="search_title">Öğrenci Girişi</h1>
            <input
              value={this.state.value}
              onChange={this.userChange}
              id="search_form_category"
              className="input_field search_form_category"
              type="text"
              placeholder="Kullanıcı Adı"
            />
            <input
                value={this.state.value}
                onChange={this.passChange}
              id="search_form_degree"
              className="input_field search_form_degree"
              type="password"
              placeholder="Şifre"
            />

            <Link href="#">
              <button
                id="search_submit_button"

                className="search_submit_button trans_200"
                onClick={this.onLoginClick}
              >
                Giriş Yap
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
