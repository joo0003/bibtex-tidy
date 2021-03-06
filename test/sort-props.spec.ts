import { bibtex, test, checkSame } from './utils';

const input = bibtex`
@ARTICLE {feinberg1983technique,
  number={1},
  title={A technique for radiolabeling DNA restriction endonuclease fragments to high specific activity},
author="Feinberg, Andrew P and Vogelstein, Bert",
  journal    = {Analytical biochemistry},
  volume = 132,
  pages={6-13},
  year={1983},
  month={aug},
  publisher={Elsevier},}`;

const output = bibtex`
@article{feinberg1983technique,
  title         = {A technique for radiolabeling DNA restriction endonuclease fragments to high specific activity},
  author        = "Feinberg, Andrew P and Vogelstein, Bert",
  year          = {1983},
  month         = {aug},
  journal       = {Analytical biochemistry},
  publisher     = {Elsevier},
  volume        = 132,
  number        = {1},
  pages         = {6--13}
}
`;

test('sort properties in default order', (t, tidy) => {
	const tidied = tidy(input, { sortFields: true });
	checkSame(t, tidied.bibtex, output);
});
