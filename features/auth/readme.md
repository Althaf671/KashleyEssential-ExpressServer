# Feature auth #
Adalah modul untuk menyimpan seluruh logika keamanan baik autentikasi dan autorisasi.

**Terdiri dari**
1. Basic auth yaitu:
   1. Register
   2. Verify email
   3. Login
2. Session auth yaitu:
   1. refresh token rotation
   2. logout session
   3. logout all session
   4. session revoke
3. Password auth yaitu:
   1. forgot password
   2. reset password
   3. change password
4. Captcha yaitu:
   1. captcha challege
5. Admin auth yaitu:
   1. superToken
   2. 2fa
6. Two fa yaitu:
   1. scan qr code
   2. kode dari authenticator
