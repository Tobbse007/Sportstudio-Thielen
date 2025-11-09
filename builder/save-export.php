<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['html']) || !isset($data['folderName']) || !isset($data['fileName'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$html = $data['html'];
$folderName = preg_replace('/[^a-zA-Z0-9-_]/', '', $data['folderName']);
$fileName = preg_replace('/[^a-zA-Z0-9-_]/', '', $data['fileName']);

// Erstelle Export-Ordner
$exportDir = __DIR__ . '/export/' . $folderName;
if (!is_dir($exportDir)) {
    mkdir($exportDir, 0755, true);
}

// Speichere HTML-Datei
$filePath = $exportDir . '/' . $fileName . '.html';
$success = file_put_contents($filePath, $html);

if ($success === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save file']);
    exit;
}

echo json_encode([
    'success' => true,
    'path' => 'export/' . $folderName . '/' . $fileName . '.html',
    'bytes' => $success
]);
