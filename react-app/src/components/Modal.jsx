import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Modal() {
  const { modal, closeModal, openRecoveryModal } = useApp();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleRecoverySubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const isVisible = modal.isOpen;

  return (
    <>
      <div id="window" className={isVisible ? 'hhdw' : 'hhde'}>
        {isVisible && (
          <>
            {modal.type === 'login' && (
              <>
                <div className="fl">
                  <big>Members area</big>
                </div>
                <div className="fr">
                  <span className="close" onClick={closeModal}>
                    <i className="far fa-times-circle"></i>
                  </span>
                </div>
                <div className="cl"></div>
                <form onSubmit={handleLoginSubmit}>
                  <p>
                    E-mail<br />
                    <input
                      type="text"
                      className="field"
                      id="lolo1"
                      autoComplete="off"
                      name="login"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </p>
                  <p>
                    Password (
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={openRecoveryModal}
                    >
                      Forgot password?
                    </span>
                    )<br />
                    <input
                      type="password"
                      id="lolo2"
                      className="field"
                      name="pass"
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                    />
                  </p>
                  <p align="center">
                    <input
                      type="submit"
                      value="Sign In"
                      name="auth"
                      className="btn orange"
                    />
                  </p>
                </form>
              </>
            )}

            {modal.type === 'recovery' && (
              <>
                <div className="fl">
                  <big>Recovery</big>
                </div>
                <div className="fr">
                  <span className="close" onClick={closeModal}>
                    <i className="far fa-times-circle"></i>
                  </span>
                </div>
                <div className="cl"></div>
                <form onSubmit={handleRecoverySubmit}>
                  <p>
                    Enter your registration E-mail<br />
                    <input
                      type="email"
                      required
                      name="myemail"
                      className="field"
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                    />
                  </p>
                  <p align="center">
                    <input type="submit" value="Submit" className="btn" />
                  </p>
                </form>
              </>
            )}

            {modal.type === 'message' && (
              <>
                <div className="fl">
                  <big></big>
                </div>
                <div className="fr">
                  <span className="close" onClick={closeModal}>
                    <i className="far fa-times-circle"></i>
                  </span>
                </div>
                <div className="cl"></div>
                <p>{modal.message}</p>
              </>
            )}
          </>
        )}
      </div>
      <div onClick={closeModal}></div>
    </>
  );
}
