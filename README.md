# MinIO Design System

The MinIO Design System is a design specification for all UI elements used in MinIO products.

## How to test

You can test this package using the embedded storybook. Please follow these steps:

1. Do `yarn install` in the root folder of mds
2. Start Story book by running `yarn storybook`
3. Open any browser and go to `http://localhost:6006`

## Build distribution files

To create distribution files you can run `yarn build` or `make build` in source folder. This will create the required dist folders.

This process is required everytime a new component is created and ready to be distributed

## License

MinIO Design System source is licensed under the GNU AGPLv3 license that can be found in the [LICENSE](https://github.com/minio/mds/blob/master/LICENSE) file.
