SAFEr Browser
======

SAFEr is a browser designed to open safe:// websites on The SAFE Network.

For more information about The SAFE Network please vist the following links.

* https://safenetwork.org/
* https://safenetforum.org/
* https://safenetforum.org/t/safer-browser-s-proposal-donation-address-in-op/10336/247
* http://maidsafe.net/


# Linux/Ubuntu Install Instructions:

Step 01: Install Git https://help.ubuntu.com/lts/serverguide/git.html

Step 02: Sign up for https://github.com/

Step 03: https://help.github.com/articles/set-up-git/#platform-linux

Step 04: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux

Step 05: https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/#platform-linux



Step 06: Install node js requires the latest version of node js
Check to see what the latest version is here https://nodejs.org/en/download/

Use option one make sure to install the latest version
http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#node-version-manager



Step 07: Open Terminal

* $ git clone https://github.com/joshuef/beaker.git
* $ cd beaker
* $ git checkout SafePOC
* $ npm install
* $ npm run rebuild
* $ npm start


Step 08: Any time you want to run the browser again all you have to do is open terminal


* $ cd beaker
* $ npm start


Note 01: If you want to do a fresh install. Delete the beaker folder and start at Step 07:

Note 02: Do not worry about any errors that appear.



## License

Modified MIT License (MIT)

Copyright (c) 2016 Paul Frazee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

 1. Any project using the Software will include a link to the Beaker project page,
along with a statement of credit. (eg "Forked from Beaker")

 2. The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
