import os from "os";

const getEOL = () => {
  console.log(`End-Of-Line: ${os.EOL}`);
};

const getCpusInfo = () => {
  const cpus = os.cpus();
  console.log("CPUs Info:");
  cpus.forEach((cpu, index) => {
    console.log(`  CPU ${index + 1}: ${cpu.model} (${cpu.speed} GHz)`);
  });
};

const getHomeDir = () => {
  console.log(`Home Directory: ${os.homedir()}`);
};

const getUsername = () => {
  console.log(`Current System User: ${os.userInfo().username}`);
};

const getCpuArchitecture = () => {
  console.log(`CPU Architecture: ${os.arch()}`);
};

export { getEOL, getCpusInfo, getHomeDir, getUsername, getCpuArchitecture };
