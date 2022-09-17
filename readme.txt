 https://docs.nestjs.com/first-steps

 1. npm i -g @nestjs/cli
 2. nest new nestjs_app
 3. cd nestjs_app
 4. npm run start


 Deployment :
    1. link: https://trilon.io/blog/deploying-nestjs-to-zeit-now
    2. npm i -g now
    3. now login
    4. now.json (fill it)
    5. npm run build && now
    6. vercel --prod   ( to override later)

    (Everytime there is a git push, steps to be followed to include even deployment into Vercel):
      1. git add .
      2. git commit -m "Changes"
      3. git push origin master
      4. npm run build && now
      5. vercel --prod


