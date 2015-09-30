'use strict';

App.service('lang', function () {
 
       this.es = {

            directives : { 

                messages : {
                  'required':   'Dato obligatorio',
                  'email':      'Email no es valido',
                  'minlength':  ':label debe tener al menos :minlength caracteres',
                  'max':        ':label debe ser un numero menor o igual a ":max"',
                  'min':        ':label debe ser un numero mayor o igual a ":min"',
                  'min_values': 'Debes seleccionar al menos :min items',
                  'max_values': 'Debes seleccionas menos de :max items',
                  'mask':       'Complete el siguiente formato : :placeholder',
                  'max_time':   'La hora debe ser menor o igual a :max',
                  'min_time':   'La hora debe ser mayor o igual a :min',
                  'match':      'La contaseña debe coincidir',
                  'lengthmin':  'Debe tener al menos :lengthmin caracteres'
                }

            },

            editProfileConfig : {

               title :       'Editar perfil',
               changepass :  'Cambiar contraseña',
               pass :        { label : 'Contraseña actual' },
               newpass :     { label : 'Nueva contraseña' },
               repass :      { label : 'confirmar la nueva contraseña' },
               btns :        { save  : 'GUARDAR', cancel : 'CANCELAR' }

            },

            registerConfig : {
               title :       'Registro de usuario',
               email :       { label : 'Correo Electronico', placeholder : 'Escriba su email' },
               name :        { label : 'Nombre', placeholder : 'Escriba su nombre' },
               address :     { label : 'Dirección', placeholder : 'Escriba su direccion' },
               level:        { label : 'Nivel',
                                options : [
                                   { text : 'Nivel basico',   value : '1'},
                                   { text : 'Nivel medio',    value : '2'},
                                   { text : 'Nivel avanzado', value : '3'}

                                ]
                             },
               sex :         { label : 'Sexo', 
                                options : [
                                   { text : 'Masculino', value : 'm'},
                                   { text : 'Femenino', value : 'f'}
                                ]
                              },
               terms :    { label : 'Terminos y condiciones', iagree : 'Acepto los terminos y condiciones' },
               pass :        { label : 'Contraseña' },
               repass :      { label : 'Confirmar contraseña' },
               btnregister : { text  : 'REGISTRATE' }

            },

            loginConfig : {
               title :       'Iniciar Sesión',
               login :       { label : 'Usuario', placeholder : 'Escriba su email' },
               pass :        { label : 'Contraseña' },
               btns :        { enter  : 'ENTRAR', register : 'REGISTRAR' },
               mailaction :  { text : 'REENVIAR EMAIL'}

            },

            profileConfig : {
               title :    'Perfil de usuario',
               btns :     { edit : 'EDITAR', back : 'VOLVER AL MENU' }

            }

        }

        this.en = {

            directives : {
                messages : {
                  'required':   'This field is required',
                  'email':      'The email is invalid',
                  'minlength':  ':label must have at least :minlength characters',
                  'max':        ':label must be a number less than or equal to ":max"',
                  'min':        ':must be a number greater than or equal to ":min"',
                  'min_values': 'You must select at least :min items',
                  'max_values': 'You must select less than :max items',
                  'mask':       'Complete the following format : :placeholder',
                  'max_time':   'The time must be less than or equal to :max',
                  'min_time':   'The time must be greater or equal to :min',
                  'match':      'The passwords must match',
                  'lengthmin':  'must have at least :lengthmin characters'
                }
            },

            registerConfig : {
               title :       'Register',
               email :       { label : 'Email', placeholder : 'Write you email' },
               name :        { label : 'Name', placeholder : 'Write you name' },
               address :     { label : 'Address', placeholder : 'Write you Address' },
               level:        { label : 'Level',
                                options : [
                                   { text : 'Basic level',   value : '1'},
                                   { text : 'Medium level',  value : '2'},
                                   { text : 'Avanced level', value : '3'}

                                ]
                             },
               sex  :        { label : 'Sex',
                                options : [
                                   { text : 'Male', value : 'm'},
                                   { text : 'Female', value : 'f'}
                                ]
                             },
               terminos :    { label : 'Privacy policies', iagree : 'I agree privacy policy' },
               pass :        { label : 'Password' },
               repass :      { label : 'Confirm password' },
               btnregister : { text  : 'REGISTER' },

            },

            loginConfig : {
               title :       'Log in',
               login :       { label : 'User', placeholder : 'Write you email' },
               pass :        { label : 'Password' },
               btns :        { enter  : 'ENTER', register : 'REGISTER' },
               mailaction :  { text : 'FORWARD EMAIL'}

            },

            profileConfig : {
               title :    'Profile',
               btns :     { edit : 'EDIT', back : 'GO TO MENU' }

            }

        }

  
});