// Mock Data Generator for Testing Without Backend

export const generateMockDomain = (isMalicious = false) => {
  const safeDomains = [
    'google.com', 'github.com', 'stackoverflow.com', 'microsoft.com',
    'amazon.com', 'reddit.com', 'wikipedia.org', 'youtube.com',
    'facebook.com', 'twitter.com', 'linkedin.com', 'netflix.com'
  ];
  
  const maliciousDomains = [
    'mal-w4re-site.tk', 'phish-bank123.xyz', 'free-download-virus.gq',
    'secure-login-fake.ml', 'g00gle-secure.cf', 'paypa1-verify.tk',
    'amazon-prize-winner.xyz', 'click-here-now.gq', 'virus-scanner.ml'
  ];
  
  return isMalicious 
    ? maliciousDomains[Math.floor(Math.random() * maliciousDomains.length)]
    : safeDomains[Math.floor(Math.random() * safeDomains.length)];
};

export const generateLogEntry = () => {
  const isMalicious = Math.random() > 0.85;
  const decisions = isMalicious ? ['BLOCK', 'REVIEW'] : ['ALLOW'];
  const decision = decisions[Math.floor(Math.random() * decisions.length)];
  
  const reasons = {
    BLOCK:[

      'High entropy + suspicious TLD',
      
      'DGA pattern detected',
      'Known phishing domain',
      'Malware distribution site',
      'Command & Control server'
    ],
    ALLOW: [
      'Trusted domain',
      'Whitelisted',
      'Low risk score',
      'Verified safe',
      'Popular legitimate site'
    ],
    REVIEW: [
      'Uncertain classification',
      'New domain - needs verification',
      'Medium risk indicators',
      'Unusual TLD with mixed signals'
    ]
  };
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    domain: generateMockDomain(isMalicious),
    decision: decision,
    confidence: (Math.random() * 0.3 + (isMalicious ? 0.7 : 0.1)).toFixed(2),
    reason: reasons[decision][Math.floor(Math.random() * reasons[decision].length)],
    source: `192.168.1.${Math.floor(Math.random() * 255)}`,
    deviceName: ['John-Laptop', 'Mary-Phone', 'Office-PC', 'IoT-Camera'][Math.floor(Math.random() * 4)],
    category: ['Phishing', 'Malware', 'Safe', 'Advertising', 'Social Media'][Math.floor(Math.random() * 5)]
  };
};

export const generateChartData = (hours = 12) => {
  return Array.from({ length: hours }, (_, i) => ({
    time: `${i * 2}:00`,
    blocked: Math.floor(Math.random() * 50) + 10,
    allowed: Math.floor(Math.random() * 200) + 100,
    review: Math.floor(Math.random() * 20) + 5
  }));
};

export const generateConfidenceData = () => [
  { range: '0-20%', count: Math.floor(Math.random() * 50) + 20 },
  { range: '20-40%', count: Math.floor(Math.random() * 40) + 15 },
  { range: '40-60%', count: Math.floor(Math.random() * 35) + 10 },
  { range: '60-80%', count: Math.floor(Math.random() * 60) + 30 },
  { range: '80-100%', count: Math.floor(Math.random() * 100) + 80 }
];

export const generateThreatIntelligence = () => [
  {
    id: 1,
    type: 'Phishing Campaign',
    severity: 'Critical',
    description: 'Large-scale phishing campaign targeting banking institutions',
    affectedDomains: 1247,
    source: 'PhishTank',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },


  {
    id: 2,
    type: 'Malware Distribution',
    severity: 'High',
    description: 'Malicious domains distributing ransomware via fake software updates',
    affectedDomains: 523,
    source: 'URLhaus',
    timestamp: new Date(Date.now() - 7200000).toISOString()
  },


  {
    id: 3,
    type: 'DGA Activity',
    severity: 'Medium',
    description: 'Domain Generation Algorithm activity detected from botnet',
    affectedDomains: 89,
    source: 'Internal ML Model',
    timestamp: new Date(Date.now() - 10800000).toISOString()
  }
];

export const generateDevices = () => [
  { name:'sunny-Laptop', ip: '192.168.1.101', type: 'Laptop', requests: 1247, blocked: 34 },
  { name: 'anubhav-Phone', ip: '192.168.1.102', type: 'Mobile', requests: 856, blocked: 12 },
  { name: 'sakina-PC', ip: '192.168.1.103', type: 'Desktop', requests: 2341, blocked: 67 },
  { name: 'shikhar-Camera', ip: '192.168.1.104', type: 'IoT', requests: 423, blocked: 156 },
  { name: 'Smart-TV', ip: '192.168.1.105', type: 'TV', requests: 234, blocked: 8 }
];