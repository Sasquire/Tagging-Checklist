# e621 Tagging Checklist

This is a repository that hosts a framework and various implementations of tagging checklists for e621.

![Example image](resources/example_checklist.png)

## Checklists

Title | Author | About
--- | --- | ---
[Wiki](checklists/wiki/README.md) | idem | The checklist found on the [wiki](https://e621.net/wiki/show/e621:tagging_checklist).
~~[Complete](checklists/complete/README.md)~~ | idem | A checklist that hopes to cover every possible tag.

For  any checklist to function, you will need a [userscript manager](https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-Beginners-HOWTO#how-do-i-get-going).

## Usage

Navigate to the [upload page](https://e621.net/post/upload) and you should see some buttons. These buttons represent the checklist.

There are three types of "buttons".

* Buttons
* Lists
* Custom Tags

Buttons and lists should be straightforward. Custom tags are input boxes where you can enter text and then press a button to add it to the post.

While every button is important, not every button adds tags to the post. Some questions are too complex to be answered by just one button and, while the results are used, they do not go onto the post.

Another reason a button may not add any tags is to give the illusion of completeness. This is to help those that have the need to check off every section. These buttons can be thought of as the default  or norm. But because e621 does not tag the norm these buttons do nothing.

## Contributing
Changes and additions to the tagging framework is appreciated. Bugs will always need to be fixed. All code contributed to this project should be placed in the public domain somehow. Changes will be rejected if it requires the license of this project to be changed or forced attribution to happen.

Contributing to checklists is a different story. Checklists can maintain their own license and those rules must be followed instead. If a checklist is being hosted here as a courtesy to someone, possibly no contributions are allowed.

If you use this tool to create a checklist, I urge you to make it public so that it may be used my others. The checklist does not need to be hosted on this repository. As long as there is a link to an install or readme page, that is sufficient.

## Build process

To build the package into a useable userscript, you must have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Instillation instructions can be found [on npm's website](https://nodejs.org/en/download/package-manager/).

At this point it is useful to read through [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/). Familiarity with the command line is required.

In the project directory you should install the dependencies with `npm install`.

Finally to bundle all the code run the command `npm run build`. This should run the proper script to produce output code in the distribution folder. To test the code, you must copy the file from the corresponding output file and place it in your userscript manager of choice. Work is being done for a way to avoid this hassle, but currently none have been found.

## License
[Unlicense](https://unlicense.org)
The tagging framework is licensed under the Unlicense. Different checklists have the option to choose a different license. This means that the checklists choice of license is always more important.

Two tools are used in the build process. [Browserify](http://browserify.org/) and [Stringify](https://github.com/livoras/stringify).