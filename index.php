<?php  
// Serve the static files  
$requestUri = $_SERVER['REQUEST_URI'];
$file = __DIR__ . $requestUri;

if (file_exists($file) && !is_dir($file)) {
    // If the file exists, serve it  
    return false; // Serve the requested resource as-is  
} else {
    // Default to index.html for all other requests  
    include 'index.html';
}
?>
