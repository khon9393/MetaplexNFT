SELECT ccc.Name, ccc.Value
FROM candibar_candymachine_config AS ccc
JOIN Environment_Type AS et ON ccc.Env = et.Id  -- Corrected join condition
WHERE et.Name IN ('All', 'Production');