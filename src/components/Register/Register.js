import React from 'react';

function Register({onRouteChange}) {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ta-c">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 pb2">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 pb2">Email</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 pb2">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input type='submit' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" value="Register" onClick={() => onRouteChange('home')} />
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('signin')}>Sign In</a>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register;