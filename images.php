<?php
$imagesDir = 'images/';
$images = glob($imagesDir . '*.{jpg,png,gif}', GLOB_BRACE);
header("Content-Type: image/png");

echo implode(',', $images);
?>
