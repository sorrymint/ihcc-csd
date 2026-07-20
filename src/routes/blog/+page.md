<article class="markdown-page">
<!-- TODO list items look funny -->
<!-- TODO move blog posts to a separate directory -->
<div class="markdown-surface markdown-prose">

# Blog

This is the CSD Club's blog, with advisor approval. Any club member can submit a blog post. These posts can be any topic related to computer science, programming, club events, or campus life. Feel free to include rich media like images, videos, and code snippets. Please ensure that your content is appropriate and respectful to all readers.

## How Luke Sets Up His Laptop

> Date: 2026-07-16

For the last four or so years, I have been using Linux as my operating system.
In using it I have learned a lot and distro hopped a bit.
In summary, I started with Ubuntu -> Fedora -> Debian -> Fedora -> Image Based Fedora.
For the last year I have been on [Aurora](https://getaurora.dev/en/) which is a Fedora based image based distro.
It has been so stable, update to date, and so good it's almost boring.
I have a very up-to-date system and best of all **it doesn't get in my way**.
So I thought I would share how I set up my laptop.

![Aurora](https://getaurora.dev/aurora-text-logo.svg)

### Is Aurora Right For You?

First of all, before you switch to any Linux distro, First check if the software you rely on is available on Linux (or an alternative). 
Secondly, if you are a gamer, [check if the games you play have anti-cheat software](https://areweanticheatyet.com/) that is compatible with Linux.

But is Aurora the _right_ distro for you? 

| | Fedora | Bazzite | Aurora |
|--|--------|--------|--------|
| Easy to use | ✅ | ✅ | ✅ |
| Impossible to break | ❌ | ✅ | ✅ |
| Gaming first | ❌ |  ✅ | ❌ |
| Image based | ❌ | ✅ | ✅ |



### Installation

I will give a quick guide on how to install Aurora there are better guides out there that go into more detail but this is a quick overview of what I do.

1. Back up all your data on your computer, use local storage and cloud storage. 
2. Download the ISO from [Aurora](https://getaurora.dev/en/). Pick the write GPU, Intel/AMD or Nvidia.
![Aurora Download](/blog/lukes-laptop/download Arrora.webp)
3. Grab a USB drive and use a program to write the ISO to the USB drive. I use [Fedora Media Writer](https://fedoraproject.org/en/workstation/download/#fedora-media-writer). **Available for Windows**.
![Fedora Media Writer](/blog/lukes-laptop/usbdrive1.webp)
![Fedora Media Writer](/blog/lukes-laptop/usbdrive2.webp)
4. Boot from the USB drive and install Aurora.

The installation is pretty straightforward. Should take just a few minutes. I recommend using all default settings.

### Setting up the Dev Environment

Aurora out of the box is ready to go for most users. 
But for us developers, we need to do a few things to get our dev environment set up.
First thing you must understand is that Aurora is an image based distro. 
This means you can't change the base system, but you can install a distrobox which is a containerized Linux environment that you can customize to your liking.
So you clutter up your distrobox and not the base system.
Base system is only for Flatpaks, Distrobox is where your dev environment is.

Enable Developer Mode in Aurora. 

```bash
# Say yes to devloper packages/flatpaks
ujust devmode
just dx-group
reboot
```

Create a distrobox 

![Distrobox](https://distrobox.it/assets/splash.svg)

```bash
# You can call it whatever you want, I call mine ihcc
distrobox create ihcc
distrobox enter ihcc
```

Install all the packages you need for your dev environment.
For your distrobox, is just a fedora container, so you can install whatever packages you want.
You do so just like you would on a normal Fedora system.
Here is my set up.
Make sure you are in your distrobox when you run these commands, not the base system (`distrobox enter ihcc`).

```bash
# Install all the packages I need one at a time, or a list like this
# LibXScrnSaver is needed for some VSCode extensions to work properly
sudo dnf install node java dotnet libXScrnSaver chromium
#  Install a SDK for dotnet
sudo dnf install dotnet-sdk-10.0 #Or what ever version


# Install VSCode like normal in Fedora
# This part is always changing, so check the [VSCode website](https://code.visualstudio.com/docs/setup/linux) for the latest instructions.
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc &&
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\nautorefresh=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null
sudo dnf install code

# Export VSCode it so you can use it in your base system
distrobox-export --app code
# Leave your distrobox if you like
exit
```

Just make sure from now on you only use "Visual Studio Code (on ihcc)" and not the base system version of VSCode.
Only the one in your distrobox will have all the packages you installed in your distrobox.

### Install Non-Dev Software

Just use the Aurora "Bazaar" to install any software you want.
Everything is packaged as a Flatpak, so just click install like you would on a mobile app store.

![Aurora Bazaar](/blog/lukes-laptop/bazaar.webp)


### Maintenance

This is my favorite part, there is **very** little maintenance to do. 
Since it is an image based distro, while you use your pc in the background it is downloading updates and staging them for you.
When you reboot your computer it will apply the updates and you are good to go.
So just reboot your computer every once in a while and you will always be up to date.

If you want to check for updates you can run the following command in the terminal:

```bash
ujust update
```

That truly is all there is for the base system.
For your distrobox, you can run the following command to update it:

```bash
distrobox update --all
```


</div>
</article>
