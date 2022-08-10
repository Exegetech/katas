const validIPAddress = function (queryIP) {
  const ipv4Arr = queryIP.split('.');
  const ipv6Arr = queryIP.split(':');

  if (ipv4Arr.length === 4) {
    if (isIpv4(ipv4Arr)) {
      return 'IPv4';
    }
  }

  if (ipv6Arr.length === 8) {
    if (isIpv6(ipv6Arr)) {
      return 'IPv6';
    }
  }

  return 'Neither';
};

function isIpv4(ipv4Arr) {
  for (const num of ipv4Arr) {
    if ((num.indexOf('0') === 0 && num.length > 1) || !/^[0-9]+$/.test(num)) {
      return false;
    }

    const intNum = parseInt(num, 10);

    if (intNum > 255 || intNum < 0) {
      return false;
    }
  }

  return true;
}

function isIpv6(ipv6Arr) {
  for (const num of ipv6Arr) {
    if (num.length > 4 || num.length === 0 || !/^[a-fA-F0-9]+$/.test(num)) {
      return false;
    }
  }

  return true;
}

module.exports = { validIPAddress };
