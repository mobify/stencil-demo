
module.exports = function(grunt) {
    return {
        options: {
            bundleExec: true,
            loadPath: [
                './',
                'bower_components/'
            ],
            require: [
                'compass/import-once/activate'
            ]
        },
        prod: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },
            files: [
                {
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }
            ]
        },
        dev: {
            options: {
                style: 'expanded',
                sourcemap: 'auto'
            },
            files: [
                {
                    expand: true,
                    cwd: 'assets/styles',
                    src: ['*.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }
            ]
        }
    };
};
