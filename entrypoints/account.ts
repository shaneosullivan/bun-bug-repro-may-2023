import underscore from "underscore";

(function () {
  console.log(
    "This is another sample file, let's use the imported module so it is not removed by Bun",
    underscore.map([1, 2, 3], (num) => "This is num " + num)
  );
})();
