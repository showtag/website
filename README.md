# showtag/website 

Some instructions can go here ...


Install Git credential manager: https://github.com/microsoft/Git-Credential-Manager-for-Windows

```cmd
rem tell git to save credentials
git config --global credential.helper store

rem tell git to use http path for github.com
git config --global credential.github.com.useHttpPath true

rem set repo specific user name and email config (work)
git config --local user.name "showtag"
git config --local user.email "61790349+showtag@users.noreply.github.com"


rem OPTIONALLY: clear global user name and email config
git config --global --unset user.name
git config --global --unset user.email

```