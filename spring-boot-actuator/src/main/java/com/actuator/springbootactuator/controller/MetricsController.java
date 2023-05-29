package com.actuator.springbootactuator.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import com.sun.management.OperatingSystemMXBean;
@RestController
public class MetricsController {
    @GetMapping("/memory-status/jvm")
    public MemoryStats getMemoryStatisticsJvm() {
        MemoryStats stats = new MemoryStats();
        stats.setHeapSize(Runtime.getRuntime().totalMemory());
        stats.setHeapMaxSize(Runtime.getRuntime().maxMemory());
        stats.setHeapFreeSize(Runtime.getRuntime().freeMemory());
        return stats;
    }
    @GetMapping("/memory-status/system")
    public MemoryStats getMemoryStatisticsSystem() {
        OperatingSystemMXBean osBean = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
        long totalMemory = osBean.getTotalMemorySize();
        long freeMemorySize = osBean.getFreeMemorySize();
        MemoryStats stats = new MemoryStats();
        stats.setHeapMaxSize(totalMemory);
        stats.setHeapFreeSize(freeMemorySize);
        stats.setHeapSize(totalMemory - freeMemorySize);
        return stats;
    }
}
