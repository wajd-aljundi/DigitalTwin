package factorydigitaltwin.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class LiveSyncUpdateManager {
    // pending update actions indexed by their update key
    private final Map<String, Runnable> pending = new ConcurrentHashMap<>();
    // queues an update for later execution
    public void queue(String key, Runnable applyFn){
        pending.put(key, applyFn);
    }
    @Scheduled(fixedRate = 300)
    public void flush(){
        // runs periodically every 300ms
        // it copies the pending updates into a separate batch and removes them from
        // the shared map, in order to allow new updates to queue while updating
        // it then executes all currently pending updates
        //
        if(pending.isEmpty()) return;
        Map<String, Runnable> batch = new HashMap<>(pending);
        pending.keySet().removeAll(batch.keySet());
        for(Runnable r : batch.values()){
            try {
                r.run();
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }
}
