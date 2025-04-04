exports.ensureAbsoluteUrls = (content, baseUrl) => {
    const basePath = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
    
    return content.split('\n').map(line => {
        if (line && !line.startsWith('#') && !line.startsWith('http')) {
            try {
                return new URL(line, basePath).href;
            } catch {
                return line;
            }
        }
        return line;
    }).join('\n');
};