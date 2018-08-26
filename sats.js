// var Docker = require('dockerode');
// var docker = new Docker({ socketPath: '/var/run/docker.sock' });
// docker.listContainers(function (err, containers) {
//     //console.log(containers[0])
//     // containers.forEach(function (containerInfo) {
//     //     console.log(containerInfo)
//     // //   docker.getContainer(containerInfo.Id).stop(cb);
//     // });
// });
// function calculateCPUPercentUnix(data)  {

//    return (data.cpu_stats.cpu_usage.total_usage/data.cpu_stats.system_cpu_usage )*100

//     var cpuPercent=0;
//     var systemDelta=data.cpu_stats.system_cpu_usage-data.precpu_stats.system_cpu_usage
//     var cpuDelta= data.cpu_stats.cpu_usage.total_usage-data.precpu_stats.cpu_usage.total_usage
// 	if (systemDelta > 0.0 && cpuDelta > 0.0) {
// 		cpuPercent = (cpuDelta / systemDelta)*(data.cpu_stats.cpu_usage.percpu_usage[0].toString().length)  * 100.0
// 	}
// 	return cpuPercent
// }

// var container = docker.getContainer('5cfaff6b8b7a');
// container.stats({ stream: true }, function (err, stream) {

//     docker.modem.followProgress(stream, onFinished, onProgress);

//     function onFinished(err, output) {
//       //output is an array with output json parsed objects
//       //...
//     }
//     function onProgress(event) {

//       console.log(calculateCPUPercentUnix(event))
//         //...
//     }


//     //console.log(stream)
//     // to close the stream you need to use a nested method from inside the stream itself
//     //stream.req.socket.end();
// });


var dockerstats = require('dockerstats');
// var compose = require('docker-compose-js')('docker-compose.yaml');
var nrc = require('node-run-cmd');
function scale(num) {

    nrc.run('docker-compose up -d --scale testa=' + num);
}
// compose.scale('testa=4');
scale(5)
dockerstats.dockerContainerStats('5cfaff6b8b7a', function (data) {
    console.log('Docker Container Stats:');
    console.log('- ID: ' + data.id);
    console.log('- Mem usage: ' + data.mem_usage);
    console.log('- Mem limit: ' + data.mem_limit);
    console.log('- Mem usage %: ' + data.mem_percent);
    console.log('- CPU usage %: ' + data.cpu_percent);
})
setInterval(function () {

    dockerstats.dockerContainerStats('mosqdockertraefic_testa_1', function (data) {
        console.log('Docker Container Stats:');
        console.log('- ID: ' + data.id);
        console.log('- Mem usage: ' + data.mem_usage);
        console.log('- Mem limit: ' + data.mem_limit);
        console.log('- Mem usage %: ' + data.mem_percent);
        console.log('- CPU usage %: ' + data.cpu_percent);
    })


}, 1000);
