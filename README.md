# kickstartr-dapp
Kickstarter kinda app running on ethereum

#### Build
```
npm install --save
```

#### Compile the contracts
```
node compile.js
```

#### Deploy the contract to Rinkeby
```
METAMASK_MNEMONIC="" RINKEBY_ACCOUNT="0xBACe226b892D61CD7A7a2D6eCFd5978ec2BCBBf6" INFURA_KEY="" node deploy.js
```

#### Deploying the front end to heroku
```
heroku create
heroku apps:rename kickstartr-eth-dapp
git push heroku master
heroku ps:scale web=1
```

#### Access the app
```
https://kickstartr-eth-dapp.herokuapp.com/
```
