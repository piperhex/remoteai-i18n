import part1 from './en1';
import part2 from './en2';
import part3 from './en3';
import { en as browserHome } from './browserHome';
import { en as browserExtensions } from './browserExtensions';
export default { ...browserExtensions, ...part1, ...part2, ...part3, ...browserHome };
