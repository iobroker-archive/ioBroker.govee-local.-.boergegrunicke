import path from 'path';
import { tests } from '@iobroker/testing';

// Validate the package files
tests.packageFiles(path.join(__dirname, '..'));
